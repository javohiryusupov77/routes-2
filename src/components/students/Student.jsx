const students = [
  { id: 1, name: "Doniyor" },
  { id: 2, name: "Ibrohim" },
  { id: 3, name: "Javohir" },
  { id: 4, name: "Jaloliddin" },
];

export default function Students() {
  return (
    <div>
      <h2>Students page</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
