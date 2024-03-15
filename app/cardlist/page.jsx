import UserList from "./UserList";

export default function CardList() {
  return (
    <main>
      <div className="max-w-fit mx-auto py-8">
        <h2 className="text-center text-5xl font-bold">Avatar List</h2>
        <UserList />
      </div>
    </main>
  );
}
