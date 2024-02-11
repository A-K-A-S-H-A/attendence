import { user, columns } from "./colums";
import { DataTable } from "@/components/data-table";

async function getUsers(): Promise<user[]> {
  return [
    {
      id: "user001",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      image: "https://example.com/path/to/image1.jpg",
      lastSeen: "2024-02-10T15:30:00Z",
    },
    {
      id: "user002",
      name: "John Smith",
      email: "john.smith@example.com",
      image: "https://example.com/path/to/image2.jpg",
      lastSeen: "2024-02-09T12:24:00Z",
    },
    {
      id: "user003",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      image: "https://example.com/path/to/image3.jpg",
      lastSeen: "2024-02-08T09:45:00Z",
    },
    {
      id: "user004",
      name: "Bob Brown",
      email: "bob.brown@example.com",
      image: "https://example.com/path/to/image4.jpg",
      lastSeen: "2024-02-07T14:20:00Z",
    },
    {
      id: "user005",
      name: "Carol King",
      email: "carol.king@example.com",
      image: "https://example.com/path/to/image5.jpg",
      lastSeen: "2024-02-06T18:00:00Z",
    },
    {
      id: "user006",
      name: "David Lee",
      email: "david.lee@example.com",
      image: "https://example.com/path/to/image6.jpg",
      lastSeen: "2024-02-05T16:45:00Z",
    },
    {
      id: "user007",
      name: "Ella Moore",
      email: "ella.moore@example.com",
      image: "https://example.com/path/to/image7.jpg",
      lastSeen: "2024-02-04T10:30:00Z",
    },
    {
      id: "user008",
      name: "Frank White",
      email: "frank.white@example.com",
      image: "https://example.com/path/to/image8.jpg",
      lastSeen: "2024-02-03T20:15:00Z",
    },
    {
      id: "user009",
      name: "Gina Hall",
      email: "gina.hall@example.com",
      image: "https://example.com/path/to/image9.jpg",
      lastSeen: "2024-02-02T11:05:00Z",
    },
    {
      id: "user010",
      name: "Harry Ford",
      email: "harry.ford@example.com",
      image: "https://example.com/path/to/image10.jpg",
      lastSeen: "2024-02-01T13:00:00Z",
    },

    {
      id: "user011",
      name: "Isla Wright",
      email: "isla.wright@example.com",
      image: "https://example.com/path/to/image11.jpg",
      lastSeen: "2024-02-11T10:20:00Z",
    },
    {
      id: "user012",
      name: "Jake Turner",
      email: "jake.turner@example.com",
      image: "https://example.com/path/to/image12.jpg",
      lastSeen: "2024-02-12T11:30:00Z",
    },
    {
      id: "user013",
      name: "Kara Evans",
      email: "kara.evans@example.com",
      image: "https://example.com/path/to/image13.jpg",
      lastSeen: "2024-02-13T09:15:00Z",
    },
    {
      id: "user014",
      name: "Liam Brown",
      email: "liam.brown@example.com",
      image: "https://example.com/path/to/image14.jpg",
      lastSeen: "2024-02-14T14:45:00Z",
    },
    {
      id: "user015",
      name: "Mia Green",
      email: "mia.green@example.com",
      image: "https://example.com/path/to/image15.jpg",
      lastSeen: "2024-02-15T16:00:00Z",
    },
    {
      id: "user016",
      name: "Noah Hill",
      email: "noah.hill@example.com",
      image: "https://example.com/path/to/image16.jpg",
      lastSeen: "2024-02-16T17:30:00Z",
    },
    {
      id: "user017",
      name: "Olivia Scott",
      email: "olivia.scott@example.com",
      image: "https://example.com/path/to/image17.jpg",
      lastSeen: "2024-02-17T18:45:00Z",
    },
    {
      id: "user018",
      name: "Peyton Morris",
      email: "peyton.morris@example.com",
      image: "https://example.com/path/to/image18.jpg",
      lastSeen: "2024-02-18T19:00:00Z",
    },
    {
      id: "user019",
      name: "Quinn Lee",
      email: "quinn.lee@example.com",
      image: "https://example.com/path/to/image19.jpg",
      lastSeen: "2024-02-19T20:15:00Z",
    },
    {
      id: "user020",
      name: "Riley King",
      email: "riley.king@example.com",
      image: "https://example.com/path/to/image20.jpg",
      lastSeen: "2024-02-20T21:30:00Z",
    },
  ];
}

export default async function Page() {
  const data = await getUsers();

  return (
    <div className="container mx-auto py-10">
      <h1>User Attendance</h1>
      <br></br>
      <br></br>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
