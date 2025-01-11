import { getLocaleFromAcceptLanguageHeader, initI18N } from '$lib/translate/init';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, request }) => {
  const localeFromCookie = cookies.get('locale');

  const acceptLanguagesHeader = request.headers.get('accept-language');
  const localeFromHeader = getLocaleFromAcceptLanguageHeader(acceptLanguagesHeader);

  initI18N(localeFromCookie, localeFromHeader);
};
