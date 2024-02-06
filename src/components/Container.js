const Container = function (props) {
  switch (props.container) {
    case "header":
      return (
        <div className="flex m-auto justify-center p-5 mt-5 ">
          <div className="flex w-10/12 justify-center rounded-xl p-2 bg-neutral-900">
            {props.children}
          </div>
        </div>
      );

    case "body-app":
      return (
        <div className="flex m-auto justify-center p-5 mt-5 ">
          <div className="flex w-10/12 justify-center min-h-dvh rounded-xl p-2 bg-neutral-900">
            {props.children}
          </div>
        </div>
      );
  }
};
export default Container;
