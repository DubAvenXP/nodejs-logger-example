import buildLogger, { logger as winstonLogger } from "../../src/plugins/logger.plugin";

describe('logger.plugin.ts', () => {
    it('returns a logger object', () => {
        const logger = buildLogger('test');

        expect(typeof logger).toBe('object');
        expect(logger).toHaveProperty('log');
        expect(logger).toHaveProperty('error');
    });

    it('returns a logger object with log and error methods', () => {
        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    it('calls logger.log with message and service', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';
        const logger = buildLogger(service);

        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({ level: 'info', message, service })
        );
    });

    it('calls logger.error with message and service', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'error');
        const logger = buildLogger('service3');

        logger.error('test');

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'error',
            { message: 'test', service: 'service3' }
        );
    });
})
