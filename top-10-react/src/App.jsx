import React, { useState, useEffect } from 'react';

const colors = ['#fc2f70', '#36b3f7', '#fcd015', '#6abf4b', '#9b59b6', '#ff5a4e', '#fc2f70', '#36b3f7', '#fcd015', '#6abf4b'];

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/user.ratedList?activeOnly=true');
        const data = await response.json();
        
        if (data.status !== 'OK') {
          throw new Error('Failed to fetch user list');
        }

        const top10 = data.result.slice(0, 10);
        
        // Fetch submissions for all top 10 users to get solved count
        const usersWithSolvedCount = await Promise.all(
          top10.map(async (user, index) => {
            let solvedCount = 'N/A';
            try {
              const statusUrl = `https://codeforces.com/api/user.status?handle=${user.handle}`;
              const statusRes = await fetch(statusUrl);
              const statusData = await statusRes.json();
              
              if (statusData.status === 'OK') {
                const solvedProblems = new Set();
                for (const submission of statusData.result) {
                  if (submission.verdict === 'OK') {
                    const problemId = submission.problem.contestId + submission.problem.index;
                    solvedProblems.add(problemId);
                  }
                }
                solvedCount = solvedProblems.size;
              }
            } catch (err) {
              solvedCount = 'Error';
            }

            let name = user.handle;
            if (user.firstName && user.lastName) {
              name = `${user.firstName} ${user.lastName}`;
            } else if (user.firstName) {
              name = user.firstName;
            }
            
            let image = user.titlePhoto;
            if (image && image.startsWith('//')) {
              image = 'https:' + image;
            }

            return {
              ...user,
              displayName: name,
              displayImage: image,
              solvedCount,
              themeColor: colors[index],
              rankNumber: String(index + 1).padStart(2, '0')
            };
          })
        );
        
        setUsers(usersWithSolvedCount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <div className="min-h-screen py-10 px-5">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-12">
        Top 10 Coders on Codeforces
      </h1>

      {loading && <p className="text-center text-gray-600">Loading top coders...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {users.map((user) => (
            <div 
              key={user.handle}
              onClick={() => window.location.href = `https://codeforces.com/profile/${user.handle}`}
              className="relative bg-white p-8 text-center shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Card Number */}
              <div className="absolute top-4 left-6 text-7xl font-normal text-gray-100 z-0">
                {user.rankNumber}
              </div>

              {/* Color Tab */}
              <div 
                className="absolute top-8 right-6 w-8 h-1.5 z-10" 
                style={{ backgroundColor: user.themeColor }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center mt-2 flex-grow">
                <img 
                  src={user.displayImage} 
                  alt={user.handle} 
                  className="w-20 h-20 object-cover mb-5 bg-white"
                />
                
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {user.displayName}
                </h2>
                
                <p className="text-sm text-gray-500 my-1">
                  Handle: {user.handle}
                </p>
                <p className="text-sm text-gray-500 my-1">
                  Rating: {user.rating}
                </p>
                <p className="text-sm text-gray-500 my-1">
                  Questions Solved: {user.solvedCount}
                </p>
                
                <div className="mt-auto pt-6">
                  <button 
                    className="px-8 py-2.5 text-white text-sm transition-opacity hover:opacity-80 font-serif"
                    style={{ backgroundColor: user.themeColor }}
                  >
                    Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
