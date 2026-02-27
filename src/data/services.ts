import type { LaboratoryService } from '../types/service';

export type { ServiceCostItem, LaboratoryService } from '../types/service';

export const laboratoryServices: LaboratoryService[] = [
  {
    slug: 'patologia',
    title: 'Patología',
    shortDescription: 'Diagnóstico histopatológico y citopatológico de alta complejidad.',
    overview:
      'El servicio de patología apoya el diagnóstico integral mediante el estudio macro y microscópico de tejidos, biopsias y muestras quirúrgicas.',
    whatYouFind: [
      'Estudios histopatológicos de biopsias y piezas quirúrgicas.',
      'Citologías diagnósticas y de seguimiento clínico.',
      'Correlación clínico-patológica para apoyo terapéutico.',
      'Entrega de informes diagnósticos especializados.'
    ],
    costs: [
      {
        concept: 'Biopsia simple',
        value: 'Desde $95.000 COP',
        notes: 'El valor puede variar según técnica y complejidad.'
      },
      {
        concept: 'Biopsia especial / panel adicional',
        value: 'Desde $180.000 COP',
        notes: 'Incluye casos que requieren marcadores o técnicas complementarias.'
      }
    ]
  },
  {
    slug: 'hematologia',
    title: 'Hematología',
    shortDescription: 'Estudio integral de trastornos sanguíneos y medulares.',
    overview:
      'El área de hematología realiza pruebas para la evaluación de alteraciones de la sangre y apoyo al diagnóstico de enfermedades hematológicas.',
    whatYouFind: [
      'Hemogramas y perfiles hematológicos completos.',
      'Pruebas de coagulación y control terapéutico.',
      'Apoyo diagnóstico de anemias y síndromes mieloproliferativos.',
      'Informes clínicos para seguimiento médico.'
    ],
    costs: [
      {
        concept: 'Hemograma completo',
        value: 'Desde $28.000 COP'
      },
      {
        concept: 'Perfil hematológico especializado',
        value: 'Desde $75.000 COP',
        notes: 'Depende del panel solicitado por el especialista.'
      }
    ]
  },
  {
    slug: 'citometria-de-flujo',
    title: 'Citometría de flujo',
    shortDescription: 'Análisis celular avanzado para caracterización inmunológica.',
    overview:
      'La citometría de flujo permite el estudio de poblaciones celulares con alta precisión para clasificación y seguimiento de diferentes patologías.',
    whatYouFind: [
      'Inmunofenotipificación de poblaciones celulares.',
      'Apoyo en diagnóstico de enfermedades hematológicas.',
      'Monitoreo de respuesta al tratamiento.',
      'Reportes técnicos especializados con interpretación clínica.'
    ],
    costs: [
      {
        concept: 'Citometría básica (panel inicial)',
        value: 'Desde $220.000 COP'
      },
      {
        concept: 'Panel extendido',
        value: 'Desde $420.000 COP',
        notes: 'El valor final depende del número de marcadores requeridos.'
      }
    ]
  },
  {
    slug: 'farmacologia',
    title: 'Farmacología',
    shortDescription: 'Monitorización terapéutica y estudios de fármacos personalizados.',
    overview:
      'Este servicio evalúa concentración y respuesta de medicamentos para optimizar esquemas terapéuticos y seguridad del paciente.',
    whatYouFind: [
      'Monitorización de niveles plasmáticos de fármacos.',
      'Apoyo para ajuste de dosis terapéuticas.',
      'Asesoría técnica para interpretación de resultados.',
      'Reportes para seguimiento clínico individualizado.'
    ],
    costs: [
      {
        concept: 'Monitorización de fármaco individual',
        value: 'Desde $130.000 COP'
      },
      {
        concept: 'Perfil farmacológico ampliado',
        value: 'Desde $260.000 COP',
        notes: 'Sujeto al tipo de analitos solicitados.'
      }
    ]
  },
  {
    slug: 'toxicologia',
    title: 'Toxicología',
    shortDescription: 'Detección y cuantificación de sustancias tóxicas en muestras biológicas.',
    overview:
      'El área de toxicología brinda pruebas para identificar exposición a sustancias, apoyar decisiones clínicas y fortalecer el seguimiento de casos.',
    whatYouFind: [
      'Tamizaje toxicológico en diferentes matrices biológicas.',
      'Confirmación y cuantificación de sustancias específicas.',
      'Soporte diagnóstico en casos agudos y crónicos.',
      'Informes para apoyo médico y ocupacional.'
    ],
    costs: [
      {
        concept: 'Tamizaje toxicológico básico',
        value: 'Desde $85.000 COP'
      },
      {
        concept: 'Confirmación específica',
        value: 'Desde $190.000 COP',
        notes: 'El valor depende de la sustancia y metodología.'
      }
    ]
  },
  {
    slug: 'genetica',
    title: 'Genética',
    shortDescription: 'Pruebas genéticas y moleculares para diagnóstico y asesoría.',
    overview:
      'El servicio de genética realiza estudios moleculares y genéticos para apoyo diagnóstico, pronóstico y orientación clínica personalizada.',
    whatYouFind: [
      'Pruebas de genética molecular y paneles dirigidos.',
      'Estudios para apoyo diagnóstico de enfermedades hereditarias.',
      'Reportes técnicos con hallazgos relevantes para el clínico.',
      'Acompañamiento en interpretación de resultados.'
    ],
    costs: [
      {
        concept: 'Prueba genética dirigida',
        value: 'Desde $380.000 COP'
      },
      {
        concept: 'Panel genético ampliado',
        value: 'Desde $780.000 COP',
        notes: 'Varía según número de genes y complejidad analítica.'
      }
    ]
  },
  {
    slug: 'cedir',
    title: 'CEDIR',
    shortDescription: 'Centro Especializado de Infecciones Respiratorias.',
    overview:
      'CEDIR integra pruebas y apoyo clínico especializado para la evaluación de infecciones respiratorias y vigilancia diagnóstica.',
    whatYouFind: [
      'Pruebas diagnósticas para infecciones respiratorias.',
      'Apoyo al seguimiento de pacientes respiratorios.',
      'Reportes para decisiones clínicas oportunas.',
      'Articulación con servicios especializados del laboratorio.'
    ],
    costs: [
      {
        concept: 'Prueba respiratoria básica',
        value: 'Desde $65.000 COP'
      },
      {
        concept: 'Panel respiratorio completo',
        value: 'Desde $240.000 COP',
        notes: 'Sujeto a disponibilidad y tipo de panel diagnóstico.'
      }
    ]
  }
];

export const getServiceBySlug = (slug?: string) =>
  laboratoryServices.find((service) => service.slug === slug);
