namespace Geometry {

    export function calculateRectangleArea(
        width: number,
        height: number
    ): number {
        return width * height;
    }

    export function calculateTriangleArea(
        base: number,
        height: number
    ): number {
        return (base * height) / 2;
    }

    export function calculateCircleArea(
        radius: number
    ): number {
        return Math.PI * radius * radius;
    }

}