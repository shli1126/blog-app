const TopPick = (props) => {
  return (
    <div className="p-10 relative">
      <img
        src={props.pick}
        style={{ width: "500px", height: "400px", objectFit: "cover" }}
        alt="Banner 1"
      />
      <a
        href="/link1"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-md  hover:translate-y-[-10px] transition-all duration-300"
      >
        <h1 className="font-bold text-xl font-serif">{props.description}</h1>
        <p className="hover:underline">View details</p>
      </a>
    </div>
  );
};

export default TopPick;
