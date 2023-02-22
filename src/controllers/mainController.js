exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJS Notes",
    description: "Free nodejs",
  };
  res.render("index", { locals, layout: "../views/layouts/front-page" });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - NodeJS Notes",
    description: "Nodejs Notes App",
  };
  res.render("about", locals);
};
