import { 
  collection, 
  addDoc, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db } from '../firebase';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

export const subscribeToTestimonials = (callback) => {
  const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
  
  return onSnapshot(q, (snapshot) => {
    const testimonials = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(testimonials);
  });
};

export const addTestimonial = async (testimonialData) => {
  try {
    const docRef = await addDoc(collection(db, 'testimonials'), {
      ...testimonialData,
      createdAt: new Date()
    });
    
    // Log analytics event
    logEvent(analytics, 'testimonial_added');
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding testimonial:', error);
    throw error;
  }
};

export const deleteTestimonial = async (id) => {
  try {
    await deleteDoc(doc(db, 'testimonials', id));
    logEvent(analytics, 'testimonial_deleted');
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
}; 