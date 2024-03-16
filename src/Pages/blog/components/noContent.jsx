const NoContent = () => {
  return (
    <div
      style={{
        padding: "4%",
        marginTop: 20,
        border: "gray dashed",
        fontSize: 25,
      }}
      className="flex justify-center border-dashed border-2"
    >
      <div className="p-10 bg-slate-500">
        <span>No hay contenido</span>
      </div>
    </div>
  );
};

export default NoContent;
