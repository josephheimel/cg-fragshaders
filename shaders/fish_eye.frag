#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 newTexCoord = (vec2(2.0, 2.0)*texcoord) - vec2(1.0, 1.0);
    float theta = atan(newTexCoord.y, newTexCoord.x);
    float radius = pow(length(newTexCoord), 1.5);
    vec2 fishEyeCoord = vec2(radius * cos(theta), radius * sin(theta));
    newTexCoord = vec2(0.5, 0.5) * (fishEyeCoord + vec2(1.0, 1.0));

    FragColor = texture(image, newTexCoord);
}
