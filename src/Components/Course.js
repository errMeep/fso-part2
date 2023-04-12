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

export default Course;
