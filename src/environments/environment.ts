import { IEnvironment } from './../app/shared/interface/ienvironment';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


class Development implements IEnvironment {
    GetName(): string {
        return 'Development';
    }
    public GetApiEndpoint(): string {
        return 'http://svr-dev-40:1080';
    }

    public GetDefaultLanguage(): string {
        let browserLanguage = navigator.language || navigator['userLanguage'];
        if (browserLanguage) {
            browserLanguage = browserLanguage.slice(0, 2);
            if (browserLanguage !== 'en' && browserLanguage !== 'de' && browserLanguage !== 'fr') {
                browserLanguage = 'de';
            }
        } else {
            browserLanguage = 'de';
        }
        return browserLanguage;
    }
}

const env = new Development();
export const environment = {
    production: false,
    endpoint: env.GetApiEndpoint(),
    browserLanguage: env.GetDefaultLanguage(),
    name: env.GetName()
};

window['__env'] =  environment;

