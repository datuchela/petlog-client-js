import useAuth from "../hooks/useAuth";
import usePets from "../hooks/usePets";

// UI Components
import Link from "../components/atoms/Link";

const HomePage = () => {
  const { auth } = useAuth();
  const { isLoading, pets } = usePets();

  return (
    <>
      <div>hello, {auth?.user?.username}</div>
      <div>
        {isLoading ? (
          "loading..."
        ) : (
          <div>
            {pets[0] ? (
              <>
                <h2>Your pets:</h2>
                <ul>
                  {pets?.map((pet) => {
                    return (
                      <li key={pet.id}>
                        <Link to={`/pet/${pet.id}`}>{pet.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <div>
                <h2>You have no pets yet</h2>
                <Link to="/add/pet">Add Pet</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
