import shutil
from pathlib import Path


original_src = Path(__file__).parent / "placement-original"


def on_pre_build(config):
    site_dir = Path(config["site_dir"]) / "placement" / "original"
    if original_src.exists():
        shutil.copytree(
            str(original_src),
            str(site_dir),
            dirs_exist_ok=True,
            ignore=shutil.ignore_patterns(
                "*.class", "*.jar", "*.pyc", "*.pyo", "*.exe", "*.dll", "*.o", "*.obj", "*.min.js", "*.map"
            ),
        )
