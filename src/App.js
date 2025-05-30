import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import { useState, useEffect } from 'react';
import { subscribeToTestimonials } from './services/testimonials';

function App() {
  const { currentUser } = useAuth();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToTestimonials((updatedTestimonials) => {
      setTestimonials(updatedTestimonials);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider>
      <div className="app">
        {!currentUser ? (
          <Login />
        ) : (
          <>
            {/* Your existing app content */}
            <div className="admin-controls">
              <button onClick={() => useAuth().logout()}>Logout</button>
            </div>
          </>
        )}
      </div>
    </AuthProvider>
  );
}

export default App; 