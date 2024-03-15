export default async function UserList() {
  const getUsers = async () => {
    const type = "users";
    const size = "10";
    const url = new URL(
      `https://random-data-api.com/api/v2/${type}?size=${size}`
    );

    const res = await fetch(url);

    return res.json();
  };

  const data = await getUsers();

  return (
    <div className="card gap-4 flex flex-col sm:flex-row flex-wrap mt-8">
      {data.map((item) => (
        <div key={item.id} className="card-body bg-base-100 shadow-xl basis-72">
          <img src={item.avatar} alt={item.first_name} className="w-16" />
          <p className="card-title mt-6 font-semibold">
            {item.first_name} {item.last_name}
          </p>
          <p>Gender: {item.gender}</p>
          <p>Phone Number: {item.phone_number}</p>
          <p>Date of Birth: {item.date_of_birth}</p>
        </div>
      ))}
    </div>
  );
}
