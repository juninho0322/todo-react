const Fonts = function (props) {
  switch (props.fonts) {
    case "h1":
      return <h1 className="text-6xl max-sm:text-4xl"> {props.children}</h1>;
  }
};
export default Fonts;
