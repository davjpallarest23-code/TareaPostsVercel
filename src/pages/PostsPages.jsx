import { useEffect, useState } from 'react'
import { ObtenerPosts, BuscarPosts } from '../services/Posts'
import Tarjeta from '../components/Tarjeta'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Pagination from '@mui/material/Pagination'
import Button from '@mui/material/Button'

function Posts() {

    const [posts, setPosts] = useState([])
    const [cargando, setCargando] = useState(true)
    const [busqueda, setBusqueda] = useState('')
    const [busquedaReal, setBusquedaReal] = useState('')
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
    setCargando(true)

        if (busquedaReal !== '') {

            BuscarPosts(busquedaReal)
                .then((datos) => {
                    setPosts(datos)
                    setCargando(false)
                })
                .catch((error) => {
                    console.error(error)
                    setCargando(false)
                })

        } else {

            ObtenerPosts(pagina, 10)
                .then((datos) => {
                    setPosts(datos)
                    setCargando(false)
                })
                .catch((error) => {
                    console.error(error)
                    setCargando(false)
                })
        }

    }, [pagina, busquedaReal])

    if (cargando) {
        return <p>Cargando posts...</p>
    }

    return (
        <div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <TextField
                    label="Buscar posts"
                    variant="outlined"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    fullWidth
                />

                <Button
                    variant="contained"
                    onClick={() => {
                        setBusquedaReal(busqueda)
                        setPagina(1)
                    }}
                >
                    Buscar
                </Button>

            </div>


            <Grid container spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Tarjeta
                            nombreUsuario={post.title}
                            correo={`Post #${post.id}`}
                        />
                    </Grid>
                ))}
            </Grid>

            {busqueda === '' && (
                <Pagination
                    count={10}
                    page={pagina}
                    onChange={(event, valor) => setPagina(valor)}
                    sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
                />
            )}
        </div>
    )
}

export default Posts