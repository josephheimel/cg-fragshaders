#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);

    color.x = round(color.x * 4.0)/4.0;
    color.y = round(color.y * 4.0)/4.0;
    color.z = round(color.z * 4.0)/4.0;

    FragColor = color;
}
