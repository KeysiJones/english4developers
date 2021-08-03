function TestimonyBoxText(props) {
  return (
    <>
      <p className="testimony-box-text-1">{props.testimony}</p>
      <p className="text-2xl my-4">- {props.author}</p>
    </>
  );
}

export default TestimonyBoxText;
