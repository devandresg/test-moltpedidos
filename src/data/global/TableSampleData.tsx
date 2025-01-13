export interface Data {
  id: number;
  zona: string;
  fechaCreacion: string;
  tipoDotacion: string;
  cargo: string;
  rol: string;
  estado: string;
  prenda: string;
  talla: string;
  cantidad: string;
}

export interface Column {
  label: string; // Título de la columna
  field: keyof Data; // Campo de los datos que se asociará a esta columna
  sortable?: boolean; // Determina si la columna se puede ordenar
}

export const sampleColumns: Array<Column> = [
  { label: "Zona", field: "zona", sortable: true },
  { label: "Fecha de creación", field: "fechaCreacion", sortable: true },
  { label: "Tipo de dotación", field: "tipoDotacion", sortable: true },
  { label: "Cargo", field: "cargo", sortable: true },
  { label: "Rol", field: "rol", sortable: true },
  { label: "Estado", field: "estado", sortable: true },
];

export const sampleData: any = [
  {
    id: 1,
    zona: "Norte",
    fechaCreacion: "2025-01-01",
    tipoDotacion: "Dotación",
    cargo: "Gerente",
    rol: "Admin",
    estado: "Pendiente",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Zapatos", talla: "39", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
  },
  {
    id: 2,
    zona: "Sur",
    fechaCreacion: "2025-01-02",
    tipoDotacion: "Dotación",
    cargo: "Supervisor",
    rol: "Usuario",
    estado: "Aprobado",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Delantal", talla: "XL", cantidad: 10 },
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Pantalón", talla: "36", cantidad: 5 },
      { prenda: "Zapatos", talla: "39", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
  },
  {
    id: 3,
    zona: "Este",
    fechaCreacion: "2025-01-03",
    tipoDotacion: "Dotación",
    cargo: "Analista",
    rol: "Usuario",
    estado: "Rechazado",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Delantal", talla: "XL", cantidad: 10 },
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Pantalón", talla: "36", cantidad: 5 },
    ],
  },

  {
    id: 4,
    zona: "Oeste",
    fechaCreacion: "2025-01-04",
    tipoDotacion: "Dotación",
    cargo: "Operador",
    rol: "Usuario",
    estado: "Pendiente",
    items: [
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Zapatos", talla: "39", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
  },
  {
    id: 5,
    zona: "Centro",
    fechaCreacion: "2025-01-05",
    tipoDotacion: "Dotación",
    cargo: "Técnico",
    rol: "Admin",
    estado: "Aprobado",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Delantal", talla: "XL", cantidad: 10 },
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Zapatos", talla: "39", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
  },
  {
    id: 6,
    zona: "Noroeste",
    fechaCreacion: "2025-01-06",
    tipoDotacion: "Dotación",
    cargo: "Gerente",
    rol: "Admin",
    estado: "Rechazado",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Pantalón", talla: "36", cantidad: 5 },
      { prenda: "Zapatos", talla: "39", cantidad: 5 },
    ],
  },
  {
    id: 7,
    zona: "Sureste",
    fechaCreacion: "2025-01-07",
    tipoDotacion: "Dotación",
    cargo: "Supervisor",
    rol: "Usuario",
    estado: "Pendiente",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Delantal", talla: "XL", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Pantalón", talla: "36", cantidad: 5 },
      { prenda: "Zapatos", talla: "39", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
  },
  {
    id: 8,
    zona: "Noreste",
    fechaCreacion: "2025-01-08",
    tipoDotacion: "Dotación",
    cargo: "Analista",
    rol: "Usuario",
    estado: "Aprobado",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Delantal", talla: "XL", cantidad: 10 },
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Zapatos", talla: "39", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
  },
  {
    id: 9,
    zona: "Suroeste",
    fechaCreacion: "2025-01-09",
    tipoDotacion: "Dotación",
    cargo: "Operador",
    rol: "Usuario",
    estado: "Rechazado",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Delantal", talla: "XL", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Pantalón", talla: "36", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
  },
  {
    id: 10,
    zona: "Centro",
    fechaCreacion: "2025-01-10",
    tipoDotacion: "Dotación",
    cargo: "Técnico",
    rol: "Admin",
    estado: "Pendiente",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Delantal", talla: "XL", cantidad: 10 },
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Pantalón", talla: "36", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
  },
];

export const sampleColumnsDataXZona: Array<Column> = [
  { label: "Prenda", field: "prenda", sortable: true },
  { label: "Talla", field: "talla", sortable: true },
  { label: "Cantidad", field: "cantidad", sortable: true },
];

export const sampleDataXZona = [
  {
    zona: "Punto Virrey Norte",
    fechaCreacion: "2025-01-08",
    tipoDotacion: "Prenda",
    cargo: "Cocina",
    rol: "Jefe de cocina",
    items: [
      { prenda: "Camiseta", talla: "M", cantidad: 15 },
      { prenda: "Delantal", talla: "XL", cantidad: 10 },
      { prenda: "Camiseta", talla: "S", cantidad: 10 },
      { prenda: "Pantalón", talla: "32", cantidad: 8 },
      { prenda: "Pantalón", talla: "36", cantidad: 5 },
      { prenda: "Zapatos", talla: "39", cantidad: 5 },
      { prenda: "Zapatos", talla: "42", cantidad: 3 },
    ],
    estado: "Pendiente", // O "Aprobado" o "Rechazado"
  },
];
