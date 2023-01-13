/**
 * BEGIN
 */

import { api } from "@/api";
import { type AppType } from "next/app";

const Application: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(Application);

/**
 * END
 */
