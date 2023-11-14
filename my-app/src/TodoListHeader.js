const Header = ({ language, incompleteCount }) => {
  return (
    <div className="header">
      {language === "en"
        ? `You have ${incompleteCount} tasks left!`
        : `Bạn có ${incompleteCount} tasks chưa hoàn thành!`}
    </div>
  );
};

export default Header;
