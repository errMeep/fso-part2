//header text
const Header = (props) => {
  return <h1>{props.name}</h1>;
};

//
const Total = (props) => {
  const { course } = props;

  const totalc = course.parts.reduce((sum, x) => sum + x.exercises, 0);

  return <p>Total amount: {totalc}</p>;
};
//no bullet style
const mystyle = {
  listStyleType: 'none',
};

const Parts = (props) => {
  const { name, id, parts } = props;
  return (
    <div>
      <Header name={name} />
      <ul style={mystyle}>
        {parts.map((info) => (
          <li key={info.id.toString() + id.toString()}>
            {info.name} {info.exercises}
          </li>
        ))}
      </ul>
      <Total course={props} />
    </div>
  );
};

const Content = (props) => {
  const { courses } = props;

  return <div>{courses.map((course) => Parts(course))}</div>;
};
//course component
const Course = (props) => {
  const { course } = props;
  return <Content courses={course} />;
};

/*const Course = (props) => {
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
      <Total course={course} />
    </div>
  );
};
*/
//app with course info
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course course={courses} />;
};

export default App;
