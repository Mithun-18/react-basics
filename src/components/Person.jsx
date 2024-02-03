export default function Person({array}) {
  return (
    <div >
       {/* { console.log(person.name)} */}
      <h2>
          I am {array.name} I am {array.age} year old I am registered {array.course} course
      </h2>
      {/* {console.log(person.name)} */}
    </div>
  );
}
