import { Button } from '../components/Button';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onGenreChange(id: number): void;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({ genres, selectedGenreId, onGenreChange }: SideBarProps) {
  function handleClickButton(id: number) {
    onGenreChange(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map((genre: any) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}