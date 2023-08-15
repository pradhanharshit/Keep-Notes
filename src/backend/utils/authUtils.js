import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export const requiresAuth = function (request) {
  // console.log("try", request.requestHeaders.authorization);
  const encodedToken = request.requestHeaders.authorization;
  // console.log("enc", encodedToken);
  const decodedToken = jwt_decode(encodedToken, "secret");
  // console.log("decoded token", decodedToken);
  if (decodedToken) {
    const user = this.db.users.findBy({ email: decodedToken.email });
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
