// middleware to test if a user is authenticated
export const checkUserSession = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json("No user session")
  }
}
// else{
//     // 401 means unauthorized. delete because we have nothing to return to
//     return res.status(401).json('No user session');}
