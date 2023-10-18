CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    habilidades TEXT,
);

CREATE TABLE servicios (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    descripcion_servicio TEXT,
    precio_por_hora DECIMAL(10, 2),
);

CREATE TABLE transacciones (
    id SERIAL PRIMARY KEY,
    proveedor_id INT REFERENCES usuarios(id),
    cliente_id INT REFERENCES usuarios(id),
    fecha_inicio TIMESTAMP,
    fecha_fin TIMESTAMP,
    total_pagado DECIMAL(10, 2),
    estado_transaccion VARCHAR(50),
);

