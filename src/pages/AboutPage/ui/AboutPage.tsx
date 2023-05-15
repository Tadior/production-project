import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return <Page>{t("aboutPage")}</Page>;
};

export default AboutPage;
