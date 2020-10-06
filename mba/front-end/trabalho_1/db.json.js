const filmes = [{"id": 1, "titulo": "Um Sonho de Liberdade", "producao": "(1994)", "duracao": "142 min", "pontuacao": "9.3", "cartaz": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 2, "titulo": "Rocky: Um Lutador", "producao": "(1976)", "duracao": "120 min", "pontuacao": "8.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 3, "titulo": "RoboCop: O Policial do Futuro", "producao": "(1987)", "duracao": "102 min", "pontuacao": "7.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 4, "titulo": "À Beira da Loucura", "producao": "(1995)", "duracao": "95 min", "pontuacao": "7.2", "cartaz": "https://m.media-amazon.com/images/M/MV5BYjNkMWVkYTUtYzUwZi00ZWI1LTg3MzktZjVkNDQxZjFhOTY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 5, "titulo": "Pânico", "producao": "(1996)", "duracao": "111 min", "pontuacao": "7.2", "cartaz": "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 6, "titulo": "Deixa Ela Entrar", "producao": "(2008)", "duracao": "114 min", "pontuacao": "7.9", "cartaz": "https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY209_CR3,0,140,209_AL_.jpg"}, {"id": 7, "titulo": "Festim Diabólico", "producao": "(1948)", "duracao": "80 min", "pontuacao": "8", "cartaz": "https://m.media-amazon.com/images/M/MV5BYWFjMDNlYzItY2VlMS00ZTRkLWJjYTEtYjI5NmFlMGE3MzQ2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 8, "titulo": "Máquina Mortífera", "producao": "(1987)", "duracao": "109 min", "pontuacao": "7.6", "cartaz": "https://m.media-amazon.com/images/M/MV5BZTllNWNlZjctMWQwMS00ZDc3LTg5ZjMtNzhmNzhjMmVhYTFlXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UY209_CR1,0,140,209_AL_.jpg"}, {"id": 9, "titulo": "Mad Max: Estrada da Fúria", "producao": "(2015)", "duracao": "120 min", "pontuacao": "8.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 10, "titulo": "A Mosca", "producao": "(1986)", "duracao": "96 min", "pontuacao": "7.6", "cartaz": "https://m.media-amazon.com/images/M/MV5BODcxMGMwOGEtMDUxMi00MzE5LTg4YTYtYjk1YjA4MzQxNTNlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 11, "titulo": "Cidade das Sombras", "producao": "(1998)", "duracao": "100 min", "pontuacao": "7.6", "cartaz": "https://m.media-amazon.com/images/M/MV5BMGExOGExM2UtNWM5ZS00OWEzLTllNzYtM2NlMTJlYjBlZTJkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 12, "titulo": "O Homem Invisível", "producao": "(I) (2020)", "duracao": "124 min", "pontuacao": "7.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 13, "titulo": "Uma Linda Mulher", "producao": "(1990)", "duracao": "119 min", "pontuacao": "7", "cartaz": "https://m.media-amazon.com/images/M/MV5BNjk2ODQzNDYxNV5BMl5BanBnXkFtZTgwMTcyNDg4NjE@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 14, "titulo": "Forrest Gump: O Contador de Histórias", "producao": "(1994)", "duracao": "142 min", "pontuacao": "8.8", "cartaz": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR2,0,140,209_AL_.jpg"}, {"id": 15, "titulo": "Conan, o Bárbaro", "producao": "(1982)", "duracao": "129 min", "pontuacao": "6.9", "cartaz": "https://m.media-amazon.com/images/M/MV5BMWIxMzQxZjAtMGFkNC00NzYwLWFiMGEtNzZhZjE5MmFiMmMyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 16, "titulo": "Mártires", "producao": "(2008)", "duracao": "99 min", "pontuacao": "7.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BYTY0NTZlZjYtNWRmZi00MGRjLTk4ZDctMjE4NjBiZTUyNGNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR2,0,140,209_AL_.jpg"}, {"id": 17, "titulo": "Perdido em Marte", "producao": "(2015)", "duracao": "144 min", "pontuacao": "8", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 18, "titulo": "Cidade de Deus", "producao": "(2002)", "duracao": "130 min", "pontuacao": "8.6", "cartaz": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 19, "titulo": "Herói", "producao": "(2002)", "duracao": "120 min", "pontuacao": "7.9", "cartaz": "https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 20, "titulo": "Fervura Máxima", "producao": "(1992)", "duracao": "128 min", "pontuacao": "7.8", "cartaz": "https://m.media-amazon.com/images/M/MV5BOTIzZGU4ZWMtYmNjMy00NzU0LTljMGYtZmVkMDYwN2U2MzYwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR1,0,140,209_AL_.jpg"}, {"id": 21, "titulo": "À Espera de um Milagre", "producao": "(1999)", "duracao": "189 min", "pontuacao": "8.6", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 22, "titulo": "O Exorcista", "producao": "(1973)", "duracao": "122 min", "pontuacao": "8", "cartaz": "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 23, "titulo": "A Viagem de Chihiro", "producao": "(2001)", "duracao": "125 min", "pontuacao": "8.6", "cartaz": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 24, "titulo": "O Profissional", "producao": "(1994)", "duracao": "110 min", "pontuacao": "8.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 25, "titulo": "Your Name.", "producao": "(2016)", "duracao": "106 min", "pontuacao": "8.4", "cartaz": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 26, "titulo": "Duro de Matar", "producao": "(1988)", "duracao": "132 min", "pontuacao": "8.2", "cartaz": "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 27, "titulo": "O Sexto Sentido", "producao": "(1999)", "duracao": "107 min", "pontuacao": "8.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 28, "titulo": "Relatos Selvagens", "producao": "(2014)", "duracao": "122 min", "pontuacao": "8.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY209_CR4,0,140,209_AL_.jpg"}, {"id": 29, "titulo": "Garota Exemplar", "producao": "(2014)", "duracao": "149 min", "pontuacao": "8.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UY209_CR1,0,140,209_AL_.jpg"}, {"id": 30, "titulo": "Os Suspeitos", "producao": "(1995)", "duracao": "106 min", "pontuacao": "8.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 31, "titulo": "O Suspeito da Rua Arlington", "producao": "(1999)", "duracao": "117 min", "pontuacao": "7.2", "cartaz": "https://m.media-amazon.com/images/M/MV5BMzg4NTYwMWItZmQzMC00MTM2LWFjN2ItOGM2YWNlMDRjMDQ5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 32, "titulo": "Faca de Dois Gumes", "producao": "(1989)", "duracao": "106 min", "pontuacao": "6.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BYjhkMjBhNWItNzQ0NC00ZTY2LWFlZGEtNThhNDkwMDQxM2RiXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_UY209_CR4,0,140,209_AL_.jpg"}, {"id": 33, "titulo": "Invocação do Mal", "producao": "(2013)", "duracao": "112 min", "pontuacao": "7.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 34, "titulo": "A Morte Pede Carona", "producao": "(1986)", "duracao": "97 min", "pontuacao": "7.2", "cartaz": "https://m.media-amazon.com/images/M/MV5BYjVmY2FkMjUtMWZkNS00OGMzLWE4MGYtOWRhY2RlNTZhZjBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 35, "titulo": "Crianças Lobo", "producao": "(2012)", "duracao": "117 min", "pontuacao": "8.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BYzQxNDZhNDUtNDUwOC00NjQyLTg2OWUtZWVlYThjYjYyMTc2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg"}, {"id": 36, "titulo": "A Chegada", "producao": "(II) (2016)", "duracao": "116 min", "pontuacao": "7.9", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 37, "titulo": "A Mão que Balança o Berço", "producao": "(1992)", "duracao": "110 min", "pontuacao": "6.6", "cartaz": "https://m.media-amazon.com/images/M/MV5BYjdiZDA5ODUtMWE2OC00ZDVkLTkwN2YtOWU5ZTA2ZDdhZWQ3XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 38, "titulo": "Um Lugar Silencioso", "producao": "(2018)", "duracao": "90 min", "pontuacao": "7.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 39, "titulo": "Conta Comigo", "producao": "(1986)", "duracao": "89 min", "pontuacao": "8.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 40, "titulo": "Um Contratempo", "producao": "(2016)", "duracao": "106 min", "pontuacao": "8.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR3,0,140,209_AL_.jpg"}, {"id": 41, "titulo": "Seven: Os Sete Crimes Capitais", "producao": "(1995)", "duracao": "127 min", "pontuacao": "8.6", "cartaz": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 42, "titulo": "Quatro Casamentos e um Funeral", "producao": "(1994)", "duracao": "117 min", "pontuacao": "7", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTMyNzg2NzgxNV5BMl5BanBnXkFtZTcwMTcxNzczNA@@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 43, "titulo": "Feitiço do Tempo", "producao": "(1993)", "duracao": "101 min", "pontuacao": "8", "cartaz": "https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 44, "titulo": "Trocando as Bolas", "producao": "(1983)", "duracao": "116 min", "pontuacao": "7.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BYTEzMjBiMzktMjQyMS00YzBhLTgzNWQtNzA0NmEwMTNmMDQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 45, "titulo": "Quanto Mais Quente Melhor", "producao": "(1959)", "duracao": "121 min", "pontuacao": "8.2", "cartaz": "https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 46, "titulo": "Disque M para Matar", "producao": "(1954)", "duracao": "105 min", "pontuacao": "8.2", "cartaz": "https://m.media-amazon.com/images/M/MV5BOWIwODIxYWItZDI4MS00YzhhLWE3MmYtMzlhZDIwOTMzZmE5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 47, "titulo": "Perfume de Mulher", "producao": "(1992)", "duracao": "156 min", "pontuacao": "8", "cartaz": "https://m.media-amazon.com/images/M/MV5BZTM3ZjA3NTctZThkYy00ODYyLTk2ZjItZmE0MmZlMTk3YjQwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX140_CR0,0,140,209_AL_.jpg"}, {"id": 48, "titulo": "Os Agentes do Destino", "producao": "(2011)", "duracao": "106 min", "pontuacao": "7", "cartaz": "https://m.media-amazon.com/images/M/MV5BMzc0ZDcwZTYtOWUzZi00NDE4LWI4NjgtMWVjZTUyYTA2ZTNhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY209_CR11,0,140,209_AL_.jpg"}, {"id": 49, "titulo": "Contra o Tempo", "producao": "(2011)", "duracao": "93 min", "pontuacao": "7.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 50, "titulo": "Dredd: O Juiz do Apocalipse", "producao": "(2012)", "duracao": "95 min", "pontuacao": "7.1", "cartaz": "https://m.media-amazon.com/images/M/MV5BODkyNDQzMzUzOF5BMl5BanBnXkFtZTcwODYyMDEyOA@@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 51, "titulo": "Upgrade: Atualização", "producao": "(2018)", "duracao": "100 min", "pontuacao": "7.5", "cartaz": "https://m.media-amazon.com/images/M/MV5BMjI0NzcyMjM5Ml5BMl5BanBnXkFtZTgwMzk2NzAyNTM@._V1_UY209_CR0,0,140,209_AL_.jpg"}, {"id": 52, "titulo": "Ex_Machina: Instinto Artificial", "producao": "(2014)", "duracao": "108 min", "pontuacao": "7.7", "cartaz": "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_UY209_CR0,0,140,209_AL_.jpg"}]