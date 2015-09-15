# 2016-9-14
# Kevin Chaplin
# Trying to get a list of just the pokemon from 650 to 719 (inclusive)

import xml.etree.ElementTree as ET

def main():
	fout = open('pkmn.txt', 'w')
	e = ET.parse('pkmn.xml').getroot()
	pkmn = []
	for link in e.iter('a'):
		title = link.get('title')
		if title is None: continue
		if " " in title: continue
		pkmn.append(title)
		# fout.write(title + "\n")
	fout.write(str(pkmn))

if __name__ == '__main__': main()