
  external navbarNavItem : ReactRe.reactClass = "NavItem" [@@bs.scope "Navbar"] [@@bs.module "react-bootstrap"];
  /* this is the call that takes in Reason data and converts it to JS data. Make sure you get the conversion right! JS won't warn you of type errors... */

  /* hi */
  let createElement =
  ReactRe.wrapPropsShamelessly
   navbarNavItem  
    (Js.Obj.empty ())