// eslint-disable-next-line react/prop-types
const CardAvatarName = ({
  collapse = true,
  avatar,
  title,
  subtitle,
  bold = true,
  colorPrimary = "text-neutral-800",
  icon = false,
}) => {
  const DinamicColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div className="flex items-center space-x-2 py-3">
      <div className="flex items-center flex-shrink-0 mr-1 relative">
        <div
          style={{ backgroundColor: `${DinamicColor()}` }}
          className="h-8 w-8 text-white flex items-center justify-center rounded-full"
        >
          {avatar}
        </div>
        {icon && (
          <img
            src="/images/Star.png"
            className="bottom-0 left-5 absolute  w-3.5 h-3.5"
          />
        )}
      </div>
      {collapse && (
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm ${
              bold && "font-medium"
            } ${colorPrimary} truncate`}
          >
            {title}
          </p>
          <p className="text-xs text-gray-500 truncate dark:text-gray-400">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardAvatarName;
