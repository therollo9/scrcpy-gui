import { RenderDriverSupport } from '../hooks/useScrcpy';

export interface RendererOption {
    value: string;
    label: string;
}

export function buildRendererOptions(renderDriverSupport: RenderDriverSupport): RendererOption[] {
    return [
        { value: 'auto', label: 'Auto' },
        ...renderDriverSupport.supportedDrivers.map((driver) => ({
            value: driver.id,
            label: driver.label
        }))
    ];
}

export function mapRendererSelection(value: string): string | undefined {
    return value === 'auto' ? undefined : value;
}