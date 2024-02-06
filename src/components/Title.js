const Title = function (props) {
  switch (props.size) {
    case "1":
      return <h1 className="text-3xl">{props.children}</h1>;
    case "2":
      return <h2 className="text-lg">{props.children}</h2>;
    case "3":
      return <h3 className="text-md">{props.children}</h3>;
    default:
      return <h1 className="">{props.children}</h1>;
  }
};
export default Title;
