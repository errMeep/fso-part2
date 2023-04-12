const Header = () => {
  return <h1>Half Stack application Development</h1>;
};
const mystyle = {
  listStyleType: 'none',
};
const Course = (props) => {
  const { course } = props;
  return (
    <div>
      <Header />
      <ul style={mystyle}>
        {course.parts.map((info) => (
          <li key={info.id}>
            {' '}
            {info.name} {info.exercises}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
