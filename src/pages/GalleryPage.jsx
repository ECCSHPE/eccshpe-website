import PageSection from '../components/PageSection';
import { GALLERY_ALBUMS, photoSrc } from '../data/gallery';

const GalleryAlbum = ({ album }) => (
  <section className="gallery-album">
    <h2 className="section-title">{album.title}</h2>
    <div className="gallery-grid">
      {album.photos.map((photo) => (
        <figure key={photo.file} className="gallery-card">
          <img className="gallery-card__img" src={photoSrc(album, photo)} alt={photo.alt} loading="lazy" decoding="async" />
          <figcaption className="gallery-card__caption">{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

const GalleryPage = () => (
  <PageSection
    title="Gallery"
    intro="Club General Meetings and projects gallery. Add event photos as the semester progresses."
  >
    {GALLERY_ALBUMS.map((album) => (
      <GalleryAlbum key={album.folder} album={album} />
    ))}
  </PageSection>
);

export default GalleryPage;
