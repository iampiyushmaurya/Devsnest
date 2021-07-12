const Box = (prosp) => {
    const {title, val} = prosp;
   return (
       <div className="block">
        <h3>{title}</h3>
        <h4>On consuming 100gm {title} you will get {val} calories.</h4>
       </div>
   );
}

export default Box;