#!/usr/bin/env node

import Runner from '../src/cli/Runner';
import PdfGenerator from '../src/generator/PdfGenerator';
import FileInput from '../src/input/FileInput';
import PugProcessor from '../src/templating/PugProcessor';

import {transports} from 'winston';
import Fakturuba from '../index';
import WinstonLogger from '../src/logging/loggers/WinstonLogger';

const generator = new PdfGenerator();

const runner = new Runner();

const mainLogger = new WinstonLogger({
    transports: [
        new transports.Console(),
        new transports.File({filename: 'main.log'}),
    ],
});
runner.addLogger(mainLogger);

const input = new FileInput();
const templatingProcessor = new PugProcessor();

Fakturuba(runner, input, templatingProcessor, generator);
