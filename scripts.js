const pacientes = [
    {
        paciente: {
            nombre: 'Manuel',
            edad: 25,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Marta',
            edad: 56,
            sexo: 'M'
        },
        diasIngresado: 5,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Julia',
            edad: 38,
            sexo: 'M'
        },
        diasIngresado: 1,
        dieta: 'Sin sal'
    },
    {
        paciente: {
            nombre: 'Esteban',
            edad: 14,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Arturo',
            edad: 19,
            sexo: 'H'
        },
        diasIngresado: 2,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Isabel',
            edad: 63,
            sexo: 'M'
        },
        diasIngresado: 6,
        dieta: 'Sin sal'
    }
];

const infoPacientes = (pacientes) => {
    const nPacientes = pacientes.length;
    const nMayoresEdad = pacientes.filter(({ paciente: { edad } }) => edad > 18).length;
    const nHombresDiabeticos = pacientes.filter(
        ({ paciente: { sexo }, dieta }) => sexo === "H" && dieta === "Diabetes"
    ).length;
    const totalDiasIngreso = pacientes.reduce((acc, paciente) => acc + paciente.diasIngresado, 0);
    const mediaEdadMujeres = pacientes
        .filter(({ paciente: { sexo } }) => sexo === "M")
        .reduce((acc, { paciente: { edad } }, i, mujeres) => acc + (edad / mujeres.length), 0);

    return {
        nPacientes,
        nMayoresEdad,
        nHombresDiabeticos,
        totalDiasIngreso,
        mediaEdadMujeres
    }
}

console.log(infoPacientes(pacientes));