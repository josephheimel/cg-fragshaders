#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 newTexCoord = (vec2(2.0, 2.0)*texcoord) - vec2(1.0, 1.0);
    float radius = length(newTexCoord);
    vec2 offset =  vec2(newTexCoord.x * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0, newTexCoord.y * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0);

    vec2 finalTexCoord = texcoord + offset;

    FragColor = texture(image, finalTexCoord);
}
