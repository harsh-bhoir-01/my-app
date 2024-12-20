import useFetch from "./utils/useFetch";

function App() {
  const data = useFetch();
  console.log(data);
  if (!data || !data.results) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-400">
        {data.results.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 max-w-sm flex items-center space-x-6 h-56 w-96 border border-blue-800"
          >
            <div>
              <img
                alt="Profile"
                src={user.picture.large}
                className="w-32 h-32 rounded-md border-2 border-blue-800 shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                <p className="font-semibold">First Name:</p>
                <p>{user.name.first}</p>
                <p>{user.name.last}</p>
              </div>

              <div className="flex flex-wrap gap-1 capitalize">
                <p className="font-semibold">Gender:</p>
                <p>{user.gender}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                <p className="font-semibold">Phone no.:</p>
                <p>{user.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
