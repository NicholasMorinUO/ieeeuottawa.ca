import React from 'react';
import Vote from './Elections/Vote';
import ForcedExternalRedirect from '../components/Routers/ForcedExternalRedirect';
import { isFacebookApp, renderUnsupportedBrowser } from '../util';

const browserUrlAndroid = 'googlechrome://ieeeuottawa.ca/vote';
const browserUrliOS = 'x-web-search://?http://ieeeuottawa.ca/vote';

const vote = () => {
    return (
        <>
            {!isFacebookApp() && <Vote />}
            {renderUnsupportedBrowser()}
            {/* Android */}
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrlAndroid}
                    seconds={2}
                    urlDescription=""
                />
            )}
            {/* iOS */}
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrliOS}
                    seconds={3}
                    urlDescription=""
                />
            )}
        </>
    );
};

export default vote;
