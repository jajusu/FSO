const Part = (props) => {
    console.log("row ",props.name)
    return (
      <p>{props.name} {props.exercises}</p>
    )
  }

const Header = (props) => {
  return (
    <h2>{props.coursename}</h2>
  )
}

const Content = (props) => {
  return(
    <div><Part name={props.name} exercises={props.exercises}/></div>
  )
}

const Total = (props) => {
  console.log("propsit ", props.course.parts[0].exercises)
  // let summa=0;
  const { course } = props
  // console.log("pituus ", course.parts.length)
  // for (let i=0; i<course.parts.length; i++){
  //   summa=summa+course.parts[i].exercises
  // }
  const total = course.parts.reduce((sum,order) => sum + order.exercises,0)
  console.log("total ",total)
  // console.log("parts ",course.parts)
  // console.log("summa",summa);
  return(
    <div><b>total of {total} exercises</b></div>
  )
}

const Course = (props) => (
  <div>
    <h1>Web development curriculum</h1>
    {
      props.course.map(course => {
        return (
          <div>
            <div><Header coursename={course.name}/></div>
            {
              course.parts.map(course => {
                return (<div><Content key={course.id} name={course.name} exercises={course.exercises}/></div>)})
            }
          <Total course={course}/>
          </div>
        )
      })
    }
  </div>
);

export default Course;