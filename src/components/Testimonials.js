import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

// Add a testimonial
const addTestimonial = async (testimonialData) => {
  try {
    const docRef = await addDoc(collection(db, 'testimonials'), {
      ...testimonialData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding testimonial:', error);
    throw error;
  }
};

// Get all testimonials
const getTestimonials = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'testimonials'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting testimonials:', error);
    throw error;
  }
};

// Delete a testimonial
const deleteTestimonial = async (id) => {
  try {
    await deleteDoc(doc(db, 'testimonials', id));
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
}; 