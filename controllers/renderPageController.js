const renderIndexPage = async (req, resp, next) => {
  try {
    const response = await fetch("http://localhost:3000/api/contacts");
    const data = await response.json();
    resp.render("index", { data: data });
  } catch (error) {
    next(error);
  }
};

const renderCreateContactPage = async (req, resp, next) => {
  try {
    const response = await fetch("http://localhost:3000/api/contacts");
    const data = await response.json();
    resp.render("createContact", { data: data });
  } catch (error) {
    next(error);
  }
};

module.exports = { renderIndexPage, renderCreateContactPage };
