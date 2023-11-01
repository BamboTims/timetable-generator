import {
  NotFoundBody,
  NotFoundHeading,
  NotFoundImage,
  NotFoundSubHeading,
} from "./NotFound.styles";
import NotFoundImageSrc from "../../assets/questions.png";

const PageNotFound = () => {
  return (
    <NotFoundBody>
      <NotFoundImage src={NotFoundImageSrc} alt="Not Found" />
      <NotFoundHeading>404</NotFoundHeading>
      <NotFoundSubHeading>Looks like you&apos;re Lost</NotFoundSubHeading>
    </NotFoundBody>
  );
};

export default PageNotFound;
