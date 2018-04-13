
    export class ErniJsUtilsDebounce {
        private static _debouceInternal: { [key: string]: any; } = {};

        static start(func: () => void, key: string, timeout: number = 10000) {
            if (this._debouceInternal[key] !== undefined) {
                clearTimeout(this._debouceInternal[key]);
            }
            this._debouceInternal[key] = setTimeout(func, timeout);
        }

        static cancel(key: string) {
            clearTimeout(this._debouceInternal[key]);
            this._debouceInternal[key] = undefined;
        }
    }

    export class ErniJsUtilsBlockControl {
        constructor(container: string | JQuery, withSpinner: boolean = true, spinType: faSpinType = faSpinType.Pulse) {
            this.container = $(container);
            this.oldPosition = this.container.css('position');
            this.container.css('position', 'relative');
            this.container.append(this.blocker);

            if (withSpinner) {
                this.blocker.append($('<i class="fa fa-spinner ' + faSpinType['GetHtmlClass'](spinType) + ' fa-3x"></i>'));
            }
        }

        private oldPosition: string;
        public container: JQuery;
        public blocker = $('<div style="position: absolute; top: 0px; left: 0px; '
                        + 'right: 0px;bottom: 0px; background-color: #ffffff; '
                        + 'opacity: 0; display: flex; justify-content: center; align-items: center;"></div>');

        public remove() {
            this.container.css('position', this.oldPosition);
            this.blocker.remove();
        }
    }

    export class ErniJsUtilsButtonInProgress {
        constructor(button: JQuery, iconSelector: string = 'i', spinType: faSpinType = faSpinType.Pulse) {
            this.button = button;
            this.iconSelector = iconSelector;
            this.oldIcon = this.button.find(this.iconSelector);

            this.button.attr('disabled', 'disabled');
            this.button.data('oldIcon', this.oldIcon);

            this.newIcon = $('<' + this.iconSelector + ' class="fa '
                + faSpinType['GetHtmlClass'](spinType) + ' fa-spinner"></' + this.iconSelector + '>');
            this.oldIcon.replaceWith(this.newIcon);
        }

        public button: JQuery;
        private iconSelector: string;
        public oldIcon: JQuery;
        public newIcon: JQuery;

        public complete() {
            // <summary>Call this method to return button's previous state</summary>
            this.newIcon.replaceWith(this.oldIcon);
            this.button.removeAttr('disabled');
        }
    }

    export class ErniJsUtilsCommonUtil {
        public WhenUserIdleFor(ms: number, onIdle: () => void) {
            $(document).ready(() => {
                let idleTimer;
                const resetTimer = () => {
                    clearTimeout(idleTimer);
                    idleTimer = setTimeout(onIdle, ms);
                };
                $(document.body).bind('mousemove keydown click', resetTimer);
                resetTimer();
            });
        }
    }

    function clone<T>(obj: T) {
        if (null === obj || 'object' !== typeof obj) {
            return obj;
        }
        const copy = <T>obj.constructor();
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }
        return copy;
    }

    interface Dictionary<T> {
        [key: string]: T;
    }

    export enum faSpinType {
        Spin = 0,
        Pulse = 1
    }

    export function GetHtmlClass(spinType: faSpinType) {
        switch (spinType) {
            case faSpinType.Pulse:
                return 'fa-pulse';
            case faSpinType.Spin:
                return 'fa-spin';
            default:
                return 'fa-spin';
        }
    }

