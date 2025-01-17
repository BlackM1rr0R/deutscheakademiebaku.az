
import About from "./pages/about";

import Home from "./pages/home";

import NotFound from "./pages/notFound";
import Contact from './pages/contact'
import Service from "./pages/service";
import Course from "./pages/course";
const routeItem = (id, title, path, component,element) => {
  return {
    id,
    title,
    path,
    component,
    element
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
  contact: routeItem(4, 'contact', "/contact", Contact),
  service: routeItem(5, 'service', "/service", Service),
  course: routeItem(6, 'course', "/course", Course),


};

const routeArr = Object.values(routes);

export { routes, routeArr };
